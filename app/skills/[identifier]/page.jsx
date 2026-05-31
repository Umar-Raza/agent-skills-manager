import { notFound } from "next/navigation";
import { getSkills } from "../SKILLS.js";

export default async function SkillIdPage({ params }) {
    const { identifier } = await params;
    const skills = await getSkills()
    const skill = skills.find((skill) => skill.id === identifier)

    if (!skill) {
        notFound();
    }

    return <article className="max-w-md mx-auto flex flex-col gap-4 p-4">
        <h1>{skill.name}</h1>
        <h1>{skill.name}</h1>
        <p>{skill.description}</p>
        <p>{skill.category}</p>
        <p>{skill.createdAt}</p>
        <p>{skill.updatedAt}</p>
    </article>
}