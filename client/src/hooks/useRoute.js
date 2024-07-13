import { useNavigate } from "react-router-dom";

const useRoute = () => {
    const navigate = useNavigate()
    
    const navigateTo = (route) => {
        navigate(route)
    }

    return navigateTo
}

export { useRoute }