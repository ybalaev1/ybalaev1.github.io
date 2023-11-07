import { get, getDatabase, ref} from "firebase/database";
import { FB_APP } from "./FB";
import { getImages } from "./storage";
const databaseRef = getDatabase(FB_APP);

export const getProjects = async () => {
    const projectsRef = await get(ref(databaseRef, 'projects'));
    const projects: [] = await projectsRef.val();

    const items = projects.map(async (project: {short_name: string}) => {
        const images = await getImages(project.short_name).then(imgs => imgs);
        return {...project, images};
    });
    return new Promise((resolve, reject) => {
        Promise.all(items).then(result => {
                resolve(result);
            }).catch(err => {
                console.error("Error", err);
            reject(false);
        })
    })
};
