import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { CyclesContext } from "../..";
import { useFormContext } from "react-hook-form";


export default function NewCycleForm() {

    const { activeCycle } = useContext(CyclesContext);
    const { register } = useFormContext();
    return (
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput
                id="task"
                list="task-suggestion"
                placeholder="Dê um nome para o seu projeto"
                {...register('task')}
                disabled={!!activeCycle}
            />

            <datalist id="task-suggestions">
                <option value="Projeto 1" />
                <option value="Projeto Manhatam" />
                <option value="Projeto 42" />
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput
                type="number"
                id="minutesAmount"
                placeholder="00"
                step={2}
                min={1}
                max={60}
                {...register('minutesAmount', { valueAsNumber: true })}
                disabled={!!activeCycle}
            />

            <span>minutos.</span>
        </FormContainer>
    )
}
