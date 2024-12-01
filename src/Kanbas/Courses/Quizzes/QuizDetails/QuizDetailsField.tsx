export default function QuizDetailsField({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <tr className='quiz-details-field'>
      <td className='quiz-details-field-label text-end pe-2 fw-bold'>{label}</td>
      <td className='quiz-details-field-value ps-2'>{value}</td>
    </tr>
  );
}
