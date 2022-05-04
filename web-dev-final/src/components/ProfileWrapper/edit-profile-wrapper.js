import {useProfile} from "../../contexts/profile-context";
import React from "react";
import EditProfile from "../EditProfile";
import { useGetUserQuery} from "../reducers/api";
import {Spinner} from "react-bootstrap";

const EditProfileWrapper = () => {
	console.log("in edit-profile wrapper");
	const { profile } = useProfile();
	console.log("edit-profile wrapper");
	console.log(profile);
	let userId = profile._id
	const {
		data: user,
		isLoading,
		isSuccess,
		isError,
		error
	} = useGetUserQuery(userId)


	let content

	if (isLoading) {
		content = <Spinner text="Loading..." />
	} else if (isSuccess) {
		content = <EditProfile profile={user}/>
	} else if (isError) {
		content = <div>{error.error}</div>
	}
	return content
}

export default EditProfileWrapper;