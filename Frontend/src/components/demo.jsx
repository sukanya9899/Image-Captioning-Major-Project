import { Images } from "./image";

export const Demos = (props) => {
  return (
    <div id='demo' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1'>
        <div className='row'>
        <Images data={Images} />
        
        </div>
        </div>
      </div>
    </div>
  )
}