'use server'

import { addSkills, getSkills } from "../skills/SKILLS";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export default async function createSkills(prevState, formData) {
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const category = formData.get("category")?.toString();
    // console.log("Creating skills:", name, description, category)

    if (!name || !description || !category) {
        return { message: "Please fill all the fields" }
    }


    const newSkill = {
        id: Date.now().toString(),
        name,
        description,
        category,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
    await addSkills(newSkill);
    revalidatePath('/skills');
    redirect('/skills');
}