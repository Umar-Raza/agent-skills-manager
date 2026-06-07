'use client'

import { useActionState } from "react"
import { createSkills } from "@/actions/skills";

const initialState = {
    message: ''
}

export default function NewSkillPage() {

    const [state, formAction, Pending] = useActionState(createSkills, initialState);

    return (
        <form action={formAction} className="form flex flex-col gap-4 p-4 max-w-md mx-auto">
            <input type="text" name="name" className="input input-border w-full" placeholder="Skill Name" />
            <input type="text" name="description" row="3" className="input input-border w-full" placeholder="Skill Description" />
            <input type="text" name="category" className="input input-border w-full" placeholder="Skill Category" />
            <p aria-live="polite" className="text-red-500 text-xs mt-1">{state?.message}</p>
            <button type="submit" disabled={Pending} className="btn btn-primary">
                {Pending ? 'Creating...' : 'create Skill'}
            </button>
        </form>
    )
}
