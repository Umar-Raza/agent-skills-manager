
export const SKILLS = [
    {
        id: "1",
        name: "Skill 1",
        description: "Description 1",
        category: "Category 1",
        createdAt: "2025-11-04",
        updatedAt: "2025-11-04",
    },
    {
        id: "2",
        name: "Skill 2",
        description: "Description 2",
        category: "Category 2",
        createdAt: "2025-11-04",
        updatedAt: "2025-11-04"
    },
    {
        id: "3",
        name: "Skill 3",
        description: "Description 3",
        category: "Category 3",
        createdAt: "2025-11-04",
        updatedAt: "2025-11-04"
    },
    {
        id: "4",
        name: "Skill 4",
        description: "Description 4",
        category: "Category 4",
        createdAt: "2025-11-04",
        updatedAt: "2025-11-04"
    },
    {
        id: "5",
        name: "Skill 5",
        description: "Description 5",
        category: "Category 5",
        createdAt: "2025-11-04",
        updatedAt: "2025-11-04"
    }
]


export let skills = SKILLS;


export async function getSkills() {
    return [...SKILLS];
}

export async function addSkills(skill) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    SKILLS.push(skill);
    console.log('skills updated', SKILLS);
    return getSkills()
}
