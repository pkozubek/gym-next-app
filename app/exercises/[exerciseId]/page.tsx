type ExcersiePageProps = {
  params: {
    excerciseId: string;
  };
};

export default function ExcersiePage({ params }: ExcersiePageProps) {
  return <div>{params.excerciseId}</div>;
}
