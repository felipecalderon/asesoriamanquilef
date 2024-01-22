import React from 'react'
import {Spinner} from "@nextui-org/react";

const LoadingText = () => {
  return (
    <div className="inline-flex gap-4 items-center">
        <Spinner color="secondary"/>
        <p className="text-lg text-left font-semibold italic dark:text-white">Cargando...</p>
    </div>
  )
}

export default LoadingText