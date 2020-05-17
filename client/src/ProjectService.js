
import axios from 'axios';

const url = 'http://192.168.1.175:5000/api/projects/';

class ProjectService {
    // Gets the projects
     static getProjects() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(project => ({
                        ...project,
                        
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
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
    static getProject(id){
        return axios.get(`${url}${id}`).then(response => {
            return response.data
        });
    }
}

export default ProjectService;