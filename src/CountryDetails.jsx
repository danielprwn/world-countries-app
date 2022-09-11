import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useParams, useNavigate} from 'react-router-dom'

function CountryDetails({darkMode, countries, refetch}) {
  const params = useParams();
  const navigate = useNavigate();

  let name;
  let flagImg;
  let population;
  let capital;
  let region;
  let subregion;
  let nativeName;
  let topLevelDomain;
  let currencies =[];
  let languages = [];
  let borders = [];

  countries.forEach((country) => {
    if(country.alpha3Code === params.countryCode) {
      name = country.name;
      flagImg = country.flag;
      population = country.population;
      capital = country.capital;
      region = country.region;
      subregion = country.subregion;
      nativeName = country.nativeName;
      topLevelDomain = country.topLevelDomain;

      country.currencies?.forEach(currency => {
        currencies.push(currency.name);
      })
      
      country.languages?.forEach(language => {
        languages.push(language.name);
      })

      country.borders?.forEach(border => {
        borders.push(border);
      })
      
    }
  });
  
  //Back button
  const goBack = () => {
    navigate('/');
  };

  return (
    <div className='country_details'>
      <button className={`back ${darkMode ? "darkMode" : ""}`} onClick={goBack}>
        <ArrowBackIosIcon />
        <p>Back</p>
      </button>

      <div className="country_details_body">
        <div className="img_container">
          <img src={flagImg} alt="flag" />
        </div>
        <div className="info">
          <h2>{name}</h2>
          <div className="info_container">
            <div className="left_info">
              <p>Native Name: {""}
              <span className={`values ${darkMode ? "darkMode" : ""}`}>{nativeName}</span>
              </p>
              <p>Population: {""}
              <span className={`values ${darkMode ? "darkMode" : ""}`}>{population}</span>
              </p>
              <p>Region: {""}
              <span className={`values ${darkMode ? "darkMode" : ""}`}>{region}</span>
              </p>
              <p>Subregion: {""}
              <span className={`values ${darkMode ? "darkMode" : ""}`}>{subregion}</span>
              </p>
      
            </div>

            <div className="right_info">
              <p>Capital: {""}
              <span className={`values ${darkMode ? "darkMode" : ""}`}>{capital}</span>
              </p>
              <p>Top Level Domain: {""}
              <span className={`values ${darkMode ? "darkMode" : ""}`}>{topLevelDomain}</span>
              </p>
              <p>Currnecies:

              {currencies.map(currency => {
                if (currencies.indexOf(currency) !== currencies.length - 1) {
                  return (
                  <span 
                    key={currency}
                    className={`values ${darkMode ? "darkMode" : ""}`}>
                    {" "}
                    {currency},
                  </span>
                  );
                } else {
                  return (
                  <span className={`values ${darkMode ? "darkMode" : ""}`}>
                    {" "}
                    {currency}
                  </span>
                  );
                }
              })}
              </p>

              <p>Languages:
              {languages.map((language) => {
                if (languages.indexOf(language) !== languages.length - 1) {
                  return (
                  <span 
                    key={language}
                    className={`values ${darkMode ? "darkMode" : ""}`}>
                    {" "}
                    {language},
                  </span>
                  );
                } else {
                  return (
                  <span className={`values ${darkMode ? "darkMode" : ""}`}>
                    {" "}
                    {language}
                  </span>
                  );
                }
              })}
              </p>
            </div>
          </div>

          Border Countries: 
          {borders.length ? (
            borders.map((border) => (
              <div 
                key={border}
                className={`border_country ${darkMode ? "darkMode" : ""}`}
                onClick={() => {
                  refetch();
                  navigate(`/${border}`)}
                }
                >
                {border}
              </div>
            )) 
            ) : ( 
              <div className={`values ${darkMode} ? "darkMode" : ""}`}>
                <p>No borders.</p>
              </div>
          )}
          
        </div>
      </div>
    </div>
  )
}

export default CountryDetails