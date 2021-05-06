import CompanyList from '../components/meetups/CompanyList';

const DUMMY_DATA = [
  {
    id: "m2",
    title: "Deloitte",
    image:
      "https://1000logos.net/wp-content/uploads/2019/06/Deloitte-Logo.jpg",
    address: "Gustav Mahlerlaan, Amsterdam",
    description:
      "Consultancy",
  }
];
function Companies() {
  return (
    <section>
      <h1>Deelnemende bedrijven</h1>
      <CompanyList meetups={DUMMY_DATA}/>
    </section>
  );
}

export default Companies;
