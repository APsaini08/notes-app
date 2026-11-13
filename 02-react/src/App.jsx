import React from 'react'
import Card from './components/Card'
import User from './components/User'


const jobs = [{
    brandlogo: "https://imgs.search.brave.com/s5Ij-YnljJD7TOzsIvvIGHK6yU9Rhf47WsgbNlgHEWc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tdmVj/dG9yL2dvb2dsZS1p/Y29uXzc5ODU3Mi00/MjYuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw",
    company: "Google",
    dateposted: "5 days ago",
    post: "Software Engineer I",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bengaluru, India"
  },
  {
    brandlogo: "https://imgs.search.brave.com/DdLSA2YxTRffBa3gzLr439QNOQqMl98Ksr1VuSB84co/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/bG9vay5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDYv/U3ltYm9sLUFtYXpv/bi01MDB4NTAwLnBu/Zw",
    company: "Amazon",
    dateposted: "10 days ago",
    post: "Software Development Engineer I",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://imgs.search.brave.com/VEl3aMS074IZQQkN2i77qZvWyDRkzm3riKRj0GW7tCI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MTkwLzU5OC9zbWFs/bC9taWNyb3NvZnQt/bG9nby1taWNyb3Nv/ZnQtaWNvbi1mcmVl/LWZyZWUtdmVjdG9y/LmpwZw",
    company: "Microsoft",
    dateposted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Noida, India"
  },
  {
    brandlogo: "https://imgs.search.brave.com/GsUDmI-z5sqwFp_V4IZM5TBi5TvILR8IpdjvG0phWZw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MTEvTWV0YS1TeW1i/b2wtNzAweDM5NC5w/bmc",
    company: "Meta",
    dateposted: "3 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hour",
    location: "Bengaluru, India"
  },
  {
    brandlogo: "https://imgs.search.brave.com/GPKwmn4KjOr8F6O2rcdbR0jOClWf5XuKUjk2C7UvGbQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTkv/NzY2LzE5MS9zbWFs/bC9hcHBsZS1sb2dv/LWFwcGxlLWljb24t/dHJhbnNwYXJlbnQt/ZnJlZS1wbmcucG5n",
    company: "Apple",
    dateposted: "1 week ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hour",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://imgs.search.brave.com/qYaD4mpEJfyp2nWC58nXENH75S_uGCPl-3rMLd5vI9M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9uZXRm/bGl4LWxvZ28td2hp/dGUtYmFja2dyb3Vu/ZC1ncmFwaGljLXRl/bXBsYXRlLXZlY3Rv/ci1pbGx1c3RyYXRp/b24tMjE2MTM1NDA2/LmpwZw",
    company: "Netflix",
    dateposted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://imgs.search.brave.com/ElF-T6x9NZhSKnpol-PCOkQ_y_-gmV458oBHSxVAqzk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/LW1hcnF1ZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjYv/MDcvTG9nby1kZS1O/dmlkaWEtMy01MDB4/MjgxLnBuZw",
    company: "NVIDIA",
    dateposted: "8 days ago",
    post: "Software Engineer - AI",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hour",
    location: "Pune, India"
  },
  {
    brandlogo: "https://imgs.search.brave.com/BVqbk7BoovRZ-G4LggrymQfesnjBHrQaO0cpQt4SbAY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDYvQWRvYmUtTG9n/by0yMDIwLXByZXNl/bnQtNzAweDM5NC5w/bmc",
    company: "Adobe",
    dateposted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Noida, India"
  },
  {
    brandlogo: "https://imgs.search.brave.com/1NNyBGFyJNqdlYl96mflTRXGjwgB0qtkIL9o_j5_n2I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjcv/OTQxLzY5My9zbWFs/bC91YmVyLWxvZ28t/cm91bmRlZC1oZC1m/cmVlLXBuZy5wbmc",
    company: "Uber",
    dateposted: "12 days ago",
    post: "Backend Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Bengaluru, India"
  },
  {
    brandlogo: "https://imgs.search.brave.com/_RLcQgpRMmhS4932UXxNSzYCNgfIVfly2EIdA1_lzdk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmM2ZWI1ZjdhNThh/NGFhMWZiNzcwOWMu/cG5n",
    company: "Atlassian",
    dateposted: "10 weeks ago",
    post: "Software Engineer - React",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bengaluru, India"
  }
];


const App = () => {
  return (
    <div className='parent'>
      {jobs.map(function(job,index){
        return <Card key={index} company={job.company} post={job.post} logo={job.brandlogo} date={job.dateposted} tag1={job.tag1} tag2={job.tag2} pay={job.pay} location={job.location}/>
      })}
    </div>
  )
}

export default App
