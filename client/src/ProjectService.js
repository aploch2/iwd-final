
import axios from 'axios';

const url = 'http://localhost:5000/api/projects/';

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

    static insertTodo(id, newTodo){
        return axios.patch(`${url}${id}`, {
            newTodo
        })
    }

    static pullTodo(id, todo){
        return axios.patch(`${url}${id}/edit`, {
            todo
        })
        // console.log(todo);
    }

    static todoComplete(id, completed, todo){
        return axios.patch(`${url}${id}/edit`, {
            todo,
            completed
        })
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