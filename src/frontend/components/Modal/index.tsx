import { Modal as AntdModal } from 'antd';

type Props = {
  onCancel: Function;
  children: React.ReactNode;
};

const Modal = ({ onCancel, children }: Props) => (
  <AntdModal open width={1000} onCancel={() => onCancel()} footer={() => <div />}>
    {children}
  </AntdModal>
);

export default Modal;
