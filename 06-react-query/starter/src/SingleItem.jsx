import { useCreateTask, useDeleteTask } from "./reactQueryCustomHooks";

const SingleItem = ({ item }) => {
  const { editTask } = useDeleteTask();
  const { deleteTask, deleteTaskLoading } = useCreateTask();

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => editTask({ taskId: item.id, isDone: !item.isDone })}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        disabled={deleteTaskLoading}
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
