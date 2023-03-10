const Avatar = ({ img }) => {
  return (
    <div>
        <div className="relative inline-flex flex-col mb-4">
            {img?(
                <img className="rounded-full" src={img} width="48" height="48" alt="Avatar" />
            ):(
                <img className="rounded-full" src="https://ionicframework.com/docs/img/demos/avatar.svg" width="48" height="48" alt="Avatar" />
            )}
            <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-primary" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
            </svg>
        </div>
    </div>
  )
}

export default Avatar