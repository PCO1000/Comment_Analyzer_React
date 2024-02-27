
import Button from "./Button"
import Input from "./Input"
//import { analyzeComments } from "../api/request"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseComment } from "../redux/slices/RootSlice"

interface TextFormProps {
  id?: string[]
}

const TextForm = ( props:TextFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    fetch
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(() =>{window.location.reload()}, 500);
      event.target.reset()
    } else {
      dispatch(chooseComment(data.comment));
      
      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 500);
      //analyzeComments(data.comment)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="comment">Comment</label>
          <Input {...register('comment')} name='comment' placeholder="Write the comment you want to analyze" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default TextForm