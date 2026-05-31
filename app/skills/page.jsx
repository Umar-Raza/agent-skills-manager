import Link from "next/link";
import { getSkills } from './SKILLS'
export default async function SkillsPage() {

    const skills = await getSkills();

    return (
        <section>
            <h1>Skills</h1>
            <Link href="/skills/create" className="btn btn-primary mt-4">Create Skill</Link>
            <ul>
                {skills.map((skill) => (
                    <li key={skill.id} >
                        {/* {skill.name} */}
                        <Link href={`/skills/${skill.id}`}>
                            {skill.name}
                        </Link>
                    </li>
                ))}
            </ul>

        </section>

    );
}   
