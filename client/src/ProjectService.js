/* eslint-disable */
import axios from 'axios';

const url = 'http://192.168.1.175:5000/api/projects';

class ProjectService {
    // Gets the projects
    static getProjects() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(project => ({
                        ...project,
                        
                    }))
                );
            } catch(err) {
                reject(err);
            }
        });
    }

    static insertProject(title, link, deadline, image){
        return axios.post(url, {
            title,
            link,
            deadline,
            image
        });
    }

    static deleteProject(id){
        return axios.delete(`${url}${id}`);
    }
}

export default ProjectService;