import Link from "next/link";
import { getSkills } from './SKILLS'
export default async function SkillsPage() {

    const skills = await getSkills();

    return (
        <section className="p-4 flex flex-col gap-4 max-w-md mx-auto">
            <h1 className="text-2xl font-bold">Skills</h1>
            <Link href="/skills/create" className="btn btn-primary self-end">Create Skill</Link>
            <ul className="menu menu-base ">
                {skills.map((skill) => (
                    <li key={skill.id} className="mb-2">
                        {/* {skill.name} */}
                        <Link href={`/skills/${skill.id}`} className="">
                            {skill.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>

    );
}   
