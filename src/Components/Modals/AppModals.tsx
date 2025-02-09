import ErrorModal from "./ErrorModal"
import SuccessModal from "./SuccessModal"
import LoadingModal from "./LoadingModal"
import React from "react"
import CustomSnackbar from "./CustomSnackbar"

const AppModals = ()=>{
    return(
        <>
            <LoadingModal/>
            <SuccessModal/>
            <ErrorModal/>
            <CustomSnackbar/>
        </>
    )
}

export default AppModals;