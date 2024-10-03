import { MdCancel } from 'react-icons/md';
export default function CancelIcon() {
  return (
    <span className="me-1 position-relative">
      <MdCancel style={{ top: "2px" }}
        className="text-failure me-1 position-absolute fs-5" />
      <MdCancel className="text-white me-1 fs-6" />
    </span>
);}
