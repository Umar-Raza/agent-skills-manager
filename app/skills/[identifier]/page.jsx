import { getSkills } from "../SKILLS.js";

export default async function SkillIdPage({ params }) {
    const { identifier } = await params;
    const skills = await getSkills()
    const skill = skills.find((skill) => skill.id === identifier)
    console.log("identifier", identifier, "skill", skill);

    return skill ? <article className="mt-5 container">
        <h1>{skill.name}</h1>
        <h1>{skill.name}</h1>
        <p>{skill.description}</p>
        <p>{skill.category}</p>
        <p>{skill.createdAt}</p>
        <p>{skill.updatedAt}</p>
    </article> : <h1>Skill Not Found</h1>
}