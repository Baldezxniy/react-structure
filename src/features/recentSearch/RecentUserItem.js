import { Link } from "react-router-native"
import { SearchStyles } from "../../assets/search/SearchStyles"
import RecentUserImg from "./RecentUserImg"
import RecentUserName from "./RecentUserName"

const RecentUserItem = () => {
    return (
        <Link to='/chat' style={SearchStyles.profille__list__item}>
            <>
                <RecentUserImg />
                <RecentUserName />
            </>
        </Link>
    )
}

export default RecentUserItem