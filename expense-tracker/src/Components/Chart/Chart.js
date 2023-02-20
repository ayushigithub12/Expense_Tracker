import ChartBar from './ChartBar';
import './Chart.css';
const Chart=props=>{
const expenseValue=props.pointers.map(point=>point.value);
const maxiumPointer=Math.max(...expenseValue);
return (
    <div className='chart'>
     {props.pointers.map((pointer)=>(
         <ChartBar
         key={pointer.label}
         value={pointer.value}
         maxValue={maxiumPointer}
         label={pointer.label}
         /> 
     ))}
    </div>
);
}
export default Chart;