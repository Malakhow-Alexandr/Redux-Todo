import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { deleteTodo } from 'redux/todoSlice';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton
          type="button"
          onClick={() => {
            dispatch(deleteTodo(id));
          }}
        >
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
