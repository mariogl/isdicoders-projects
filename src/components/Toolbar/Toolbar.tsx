import {
  FaEye,
  FaEyeSlash,
  FaCompressArrowsAlt,
  FaExpandArrowsAlt,
} from "react-icons/fa";
import styled from "styled-components";
import {
  hidePreviewsActionCreator,
  showPreviewsActionCreator,
  toggleCompactViewActionCreator,
} from "../../redux/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const StyledToolbar = styled.div`
  background-color: #0002;
  height: 41px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  a {
    color: inherit;
  }
  a:hover {
    opacity: 0.8;
  }
  svg {
    width: 20px;
    font-size: 20px;
    margin-left: 20px;
  }
  a:first-child svg {
    margin-left: 0;
  }
  .form-check {
    margin-left: 20px;
    label {
      font-size: 14px;
    }
  }
`;

const Toolbar = (): JSX.Element => {
  const ui = useAppSelector((state) => state.ui);

  const dispatch = useAppDispatch();

  const onTogglePreviews = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    dispatch(
      ui.previews ? hidePreviewsActionCreator() : showPreviewsActionCreator()
    );
  };

  const onToggleCompactView = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    dispatch(toggleCompactViewActionCreator());
  };

  return (
    <StyledToolbar>
      <a
        href="show/hide previews"
        title="Show/Hide previews"
        onClick={onTogglePreviews}
      >
        {ui.previews ? <FaEyeSlash /> : <FaEye />}
      </a>
      <a
        href="toggle compact view"
        title="Toggle compact view"
        onClick={onToggleCompactView}
      >
        {ui.compactMode ? <FaExpandArrowsAlt /> : <FaCompressArrowsAlt />}
      </a>
    </StyledToolbar>
  );
};

export default Toolbar;
