import { HandPalm, Play } from "phosphor-react";

import { HomeContainer } from "./styles";
import { useEffect, useState } from "react";
import { differenceInSeconds } from 'date-fns'
import NewCycleForm from "./components/NewCycleForm";
import Countdown from "./components/Countdown";
import { StopCountdownButton } from "./components/NewCycleForm/styles";



interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
}


export function Home() {

    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);


    function handleCreateNewCycle(data: NewCycleFormData) {
        const newCycle: Cycle = {
            id: String(new Date().getTime()),
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }
        setCycles((state) => [...state, newCycle]);
        setActiveCycleId(newCycle.id);
        setAmountSecondsPassed(0);
        reset();
    }

    function handleStopCycle() {

        setCycles(state =>
            state.map((cycle) => {
                if (cycle.id === activeCycleId) {
                    return { ...cycle, interruptedDate: new Date() };
                    // biome-ignore lint/style/noUselessElse: <explanation>
                } else {
                    return cycle;
                }
            })
        )
        setActiveCycleId(null);
    }

    const currentSeconds = activeCycle ? (totalSeconds - amountSecondsPassed) : 0;

    const minutesAmount = Math.floor(currentSeconds / 60)
    const secondsAmount = (currentSeconds % 60)

    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmount).padStart(2, '0')

    useEffect(() => {
        if (activeCycle) {
            document.title = `${minutes}:${seconds}`
        }

    }, [minutes, seconds, activeCycle])
   
    const task = watch('task');
    const isSubmitDisabled = !task;


    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <NewCycleForm />
                <Countdown />
                {activeCycle ? (
                    <StopCountdownButton onClick={handleStopCycle} type="submit" >
                        <HandPalm size={24} />
                        Interromper
                    </StopCountdownButton>

                ) : (
                    <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
                        <Play size={24} />
                        Começar
                    </StartCountdownButton>
                )}
            </form>

        </HomeContainer>
    );
}
