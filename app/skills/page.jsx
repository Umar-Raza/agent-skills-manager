import Link from "next/link";
import { SKILLS } from './SKILLS'
export default function SkillsPage() {

    const skills = SKILLS

    return (
        <section>
            <h1>Skills</h1>
            <ul>
                {skills.map((skill) => (
                    <li key={skill.id} >
                        {/* {skill.name} */}
                        <Link href={`/skills/${skill.id}`}>{skill.name}</Link>
                    </li>
                ))}
            </ul>

        </section>

    );
}   
