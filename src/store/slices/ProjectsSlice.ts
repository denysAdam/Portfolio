import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import projects from '../../data/projects.json';

interface Project {
    title: string;
    image: string;
    code: string;
    preview: string;
    technologies: string[];
}

interface ProjectsState {
    projects: Project[];
    selectedTechnologies: string[];
    filteredProjects: Project[];
}

const initialState: ProjectsState = {
    projects: projects.projects,
    selectedTechnologies: [],
    filteredProjects: projects.projects,
};

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        // Action to show all projects
        showAllProjects(state) {
            state.selectedTechnologies = [];
            state.filteredProjects = state.projects;
        },
        // Action to filter projects by selected technologies
        filterProjectsByTechnology(state, action: PayloadAction<string>) {
            const technology = action.payload;

            // Toggle the selected technology
            if (state.selectedTechnologies.includes(technology)) {
                state.selectedTechnologies = state.selectedTechnologies.filter(
                    (tech) => tech !== technology
                );
            } else {
                state.selectedTechnologies.push(technology);
            }

            // Filter projects based on the selected technologies
            if (state.selectedTechnologies.length === 0) {
                state.filteredProjects = state.projects;
            } else {
                state.filteredProjects = state.projects.filter((project) =>
                    state.selectedTechnologies.every((tech) =>
                        project.technologies.includes(tech)
                    )
                );
            }

        },
    },
});

// Exporting action creators and reducer
export const { showAllProjects, filterProjectsByTechnology } = projectsSlice.actions;

export default projectsSlice.reducer;
