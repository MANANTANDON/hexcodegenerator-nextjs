const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
};

const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
};

const getPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
};

interface Param {
  params: { name: string };
}

export default async function Page({ params }: Param) {
  const Age = getPredictedAge(params.name);
  const Gender = getPredictedGender(params.name);
  const Country = getPredictedCountry(params.name);

  const [age, gen, count] = await Promise.all([Age, Gender, Country]);
  return (
    <>
      <div>
        <div>
          <div>Personal Info</div>
          <div>Name: {params.name}</div>
          <div>Age: {age?.age}</div>
          <div>Gender: {gen?.gender}</div>
          <div>Country: {count?.country[0]?.country_id}</div>
        </div>
      </div>
    </>
  );
}
