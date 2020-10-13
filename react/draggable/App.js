import React, {useState} from 'react';

const Draggable = WrappedComponent => {
  const DraggableComponent = () => {
    const [{diffx,diffy}, changeDiff] = useState({diffx: 0, diffy: 0})
    const [{x,y}, changePos] = useState({x:0, y: 0})
    const [drag, changeDrag] = useState(false)
    const styles = {
      left: x,
      top: y, 
    }

    const startDragging = (e) => {
      changeDrag(true)
      changeDiff({
        diffx: e.clientX,
        diffy: e.clientY
      })
    }


    const dragging = (e) => {
      if(!drag){
        return
      }
      const newX = e.target.offsetLeft - (diffx - e.clientX)
      const newY = e.target.offsetTop - (diffy - e.clientY)
      changePos({
        x: newX >= 0 ? newX: 0 ,
        y: newY >= 0 ? newY : 0
      })
      changeDiff({
        diffx: e.clientX,
        diffy: e.clientY
      })
    }

    const stopDragging = () => {
      changeDrag(false)
    }

    return (
      <WrappedComponent mouseDown = {startDragging}
        mouseUp = {stopDragging}
        mouseMove = {dragging}
        mouseOut = {stopDragging}
        style = {styles}
      />
    )
  }
  return DraggableComponent
}

const Button = (props) => {
  console.log(props.style)
  return (
    <button
      onMouseDown = {props.mouseDown}
      onMouseMove = {props.mouseMove}
      onMouseUp = {props.mouseUp}
      onMouseOut = {props.mouseOut}
      style = {props.style}
    >Draggable</button>
  )
}

const DraggableButton = Draggable(Button)


function App() {
    
  return (
    <div>
      <DraggableButton />
    </div>
  );
}

export default App;
