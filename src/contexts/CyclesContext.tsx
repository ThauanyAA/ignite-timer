import { createContext, ReactNode, useEffect, useReducer, useState } from "react"
import { Cycle, cyclesReducer } from "../reducers/cycles/reducer"
import { addNewCycleAction, finishCurrentCycleAction, interruptCurrentCycleAction } from "../reducers/cycles/actions"
import { differenceInSeconds } from "date-fns"

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
  amountSecondsPassed: number
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interrupCurrentCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: ReactNode
}


export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  }, (initialState) => {
    const storedStateAsJSON = localStorage.getItem(
      '@ignite-timer:cycles-state-1.0.0'
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }
    
    return initialState
  })

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }
    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)
    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatch(finishCurrentCycleAction())
    setAmountSecondsPassed(0)
  }

  function createNewCycle(data: CreateCycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }
    
    dispatch(addNewCycleAction(newCycle))
    setAmountSecondsPassed(0)
  }

  function interrupCurrentCycle() {
    dispatch(interruptCurrentCycleAction())
    setAmountSecondsPassed(0)
  }

  return (
    <CyclesContext.Provider value={{
      activeCycle,
      activeCycleId,
      amountSecondsPassed,
      cycles,
      markCurrentCycleAsFinished,
      setSecondsPassed,
      createNewCycle,
      interrupCurrentCycle,
    }}>
      {children}
    </CyclesContext.Provider>
  )
}
