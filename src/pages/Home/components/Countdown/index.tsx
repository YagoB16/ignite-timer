import { useEffect, useState } from "react";
import { CountdownContainer, Separator } from "./styles";
import { differenceInSeconds } from "date-fns";


interface CountdownProps {
    activeCycle: any;
    setCycles: any;
}
export default function Countdown({ activeCycle, setCycles }: CountdownProps) {
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;


    useEffect(() => {
        let interval: number;
        if (activeCycle) {
            interval = setInterval(() => {
                const secondsDiff = differenceInSeconds(
                    new Date(),
                    activeCycle.startDate
                );

                if (secondsDiff >= totalSeconds) {
                    setCycles(state =>
                        state.map((cycle) => {
                            if (cycle.id === activeCycleId) {
                                return { ...cycle, finishedDate: new Date() };
                                // biome-ignore lint/style/noUselessElse: <explanation>
                            } else {
                                return cycle;
                            }
                        })
                    )
                    setAmountSecondsPassed(totalSeconds);
                    clearInterval(interval);
                } else {
                    setAmountSecondsPassed(secondsDiff);
                }

            }, 1000)
        }

        return () => {
            clearInterval(interval)
        }
    }, [activeCycle, totalSeconds, activeCycleId])
    return (

        <CountdownContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <Separator>:</Separator>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </CountdownContainer>
    )
}
