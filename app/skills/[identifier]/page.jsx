import { SKILLS } from "../SKILLS.js";

export default async function SkillIdPage({ params }) {
    const { identifier } = await params;
    const skill = SKILLS.find((skills) => skills.id === identifier)

    console.log('skills found:', skill);

    return skill ? <article className="mt-5 container">
        <h2>{skill.name}</h2>
        <p><strong>Description :</strong>{skill.description}</p>
        <p><strong>Category :</strong>{skill.category}</p>
        <p><strong>Created at :</strong> {new Date(skill.createdAt).toLocaleDateString()}</p>
        <p><strong>Updated at :</strong> {new Date(skill.updatedAt).toLocaleDateString()}</p>
    </article> : <h1>Skill Not Found</h1>
}