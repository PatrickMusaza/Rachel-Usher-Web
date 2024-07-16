import React from "react";
import "./Form.css";

const countries = [
  { code: "AFG", name: "Afghanistan" },
  { code: "ALB", name: "Albania" },
  { code: "DZA", name: "Algeria" },
  { code: "AND", name: "Andorra" },
  { code: "AGO", name: "Angola" },
  { code: "ATG", name: "Antigua and Barbuda" },
  { code: "ARG", name: "Argentina" },
  { code: "ARM", name: "Armenia" },
  { code: "AUS", name: "Australia" },
  { code: "AUT", name: "Austria" },
  { code: "AZE", name: "Azerbaijan" },
  { code: "BHS", name: "Bahamas" },
  { code: "BHR", name: "Bahrain" },
  { code: "BGD", name: "Bangladesh" },
  { code: "BRB", name: "Barbados" },
  { code: "BLR", name: "Belarus" },
  { code: "BEL", name: "Belgium" },
  { code: "BLZ", name: "Belize" },
  { code: "BEN", name: "Benin" },
  { code: "BTN", name: "Bhutan" },
  { code: "BOL", name: "Bolivia" },
  { code: "BIH", name: "Bosnia and Herzegovina" },
  { code: "BWA", name: "Botswana" },
  { code: "BRA", name: "Brazil" },
  { code: "BRN", name: "Brunei" },
  { code: "BGR", name: "Bulgaria" },
  { code: "BFA", name: "Burkina Faso" },
  { code: "BDI", name: "Burundi" },
  { code: "CPV", name: "Cabo Verde" },
  { code: "KHM", name: "Cambodia" },
  { code: "CMR", name: "Cameroon" },
  { code: "CAN", name: "Canada" },
  { code: "CAF", name: "Central African Republic" },
  { code: "TCD", name: "Chad" },
  { code: "CHL", name: "Chile" },
  { code: "CHN", name: "China" },
  { code: "COL", name: "Colombia" },
  { code: "COM", name: "Comoros" },
  { code: "COD", name: "Congo (Democratic Republic of the)" },
  { code: "COG", name: "Congo" },
  { code: "CRI", name: "Costa Rica" },
  { code: "CIV", name: "Côte d'Ivoire" },
  { code: "HRV", name: "Croatia" },
  { code: "CUB", name: "Cuba" },
  { code: "CYP", name: "Cyprus" },
  { code: "CZE", name: "Czechia" },
  { code: "DNK", name: "Denmark" },
  { code: "DJI", name: "Djibouti" },
  { code: "DMA", name: "Dominica" },
  { code: "DOM", name: "Dominican Republic" },
  { code: "ECU", name: "Ecuador" },
  { code: "EGY", name: "Egypt" },
  { code: "SLV", name: "El Salvador" },
  { code: "GNQ", name: "Equatorial Guinea" },
  { code: "ERI", name: "Eritrea" },
  { code: "EST", name: "Estonia" },
  { code: "SWZ", name: "Eswatini" },
  { code: "ETH", name: "Ethiopia" },
  { code: "FJI", name: "Fiji" },
  { code: "FIN", name: "Finland" },
  { code: "FRA", name: "France" },
  { code: "GAB", name: "Gabon" },
  { code: "GMB", name: "Gambia" },
  { code: "GEO", name: "Georgia" },
  { code: "DEU", name: "Germany" },
  { code: "GHA", name: "Ghana" },
  { code: "GRC", name: "Greece" },
  { code: "GRD", name: "Grenada" },
  { code: "GTM", name: "Guatemala" },
  { code: "GIN", name: "Guinea" },
  { code: "GNB", name: "Guinea-Bissau" },
  { code: "GUY", name: "Guyana" },
  { code: "HTI", name: "Haiti" },
  { code: "HND", name: "Honduras" },
  { code: "HUN", name: "Hungary" },
  { code: "ISL", name: "Iceland" },
  { code: "IND", name: "India" },
  { code: "IDN", name: "Indonesia" },
  { code: "IRN", name: "Iran" },
  { code: "IRQ", name: "Iraq" },
  { code: "IRL", name: "Ireland" },
  { code: "ISR", name: "Israel" },
  { code: "ITA", name: "Italy" },
  { code: "JAM", name: "Jamaica" },
  { code: "JPN", name: "Japan" },
  { code: "JOR", name: "Jordan" },
  { code: "KAZ", name: "Kazakhstan" },
  { code: "KEN", name: "Kenya" },
  { code: "KIR", name: "Kiribati" },
  { code: "PRK", name: "North Korea" },
  { code: "KOR", name: "South Korea" },
  { code: "KOS", name: "Kosovo" },
  { code: "KGZ", name: "Kyrgyzstan" },
  { code: "LAO", name: "Laos" },
  { code: "LVA", name: "Latvia" },
  { code: "LBN", name: "Lebanon" },
  { code: "LSO", name: "Lesotho" },
  { code: "LBR", name: "Liberia" },
  { code: "LBY", name: "Libya" },
  { code: "LIE", name: "Liechtenstein" },
  { code: "LTU", name: "Lithuania" },
  { code: "LUX", name: "Luxembourg" },
  { code: "MDG", name: "Madagascar" },
  { code: "MWI", name: "Malawi" },
  { code: "MYS", name: "Malaysia" },
  { code: "MDV", name: "Maldives" },
  { code: "MLI", name: "Mali" },
  { code: "MLT", name: "Malta" },
  { code: "MHL", name: "Marshall Islands" },
  { code: "MRT", name: "Mauritania" },
  { code: "MUS", name: "Mauritius" },
  { code: "MEX", name: "Mexico" },
  { code: "FSM", name: "Micronesia" },
  { code: "MDA", name: "Moldova" },
  { code: "MCO", name: "Monaco" },
  { code: "MNG", name: "Mongolia" },
  { code: "MNE", name: "Montenegro" },
  { code: "MAR", name: "Morocco" },
  { code: "MOZ", name: "Mozambique" },
  { code: "MMR", name: "Myanmar" },
  { code: "NAM", name: "Namibia" },
  { code: "NRU", name: "Nauru" },
  { code: "NPL", name: "Nepal" },
  { code: "NLD", name: "Netherlands" },
  { code: "NZL", name: "New Zealand" },
  { code: "NIC", name: "Nicaragua" },
  { code: "NER", name: "Niger" },
  { code: "NGA", name: "Nigeria" },
  { code: "MKD", name: "North Macedonia" },
  { code: "NOR", name: "Norway" },
  { code: "OMN", name: "Oman" },
  { code: "PAK", name: "Pakistan" },
  { code: "PLW", name: "Palau" },
  { code: "PAN", name: "Panama" },
  { code: "PNG", name: "Papua New Guinea" },
  { code: "PRY", name: "Paraguay" },
  { code: "PER", name: "Peru" },
  { code: "PHL", name: "Philippines" },
  { code: "POL", name: "Poland" },
  { code: "PRT", name: "Portugal" },
  { code: "QAT", name: "Qatar" },
  { code: "ROU", name: "Romania" },
  { code: "RUS", name: "Russia" },
  { code: "RWA", name: "Rwanda" },
  { code: "KNA", name: "Saint Kitts and Nevis" },
  { code: "LCA", name: "Saint Lucia" },
  { code: "VCT", name: "Saint Vincent and the Grenadines" },
  { code: "WSM", name: "Samoa" },
  { code: "SMR", name: "San Marino" },
  { code: "STP", name: "São Tomé and Príncipe" },
  { code: "SAU", name: "Saudi Arabia" },
  { code: "SEN", name: "Senegal" },
  { code: "SRB", name: "Serbia" },
  { code: "SYC", name: "Seychelles" },
  { code: "SLE", name: "Sierra Leone" },
  { code: "SGP", name: "Singapore" },
  { code: "SVK", name: "Slovakia" },
  { code: "SVN", name: "Slovenia" },
  { code: "SLB", name: "Solomon Islands" },
  { code: "SOM", name: "Somalia" },
  { code: "ZAF", name: "South Africa" },
  { code: "SSD", name: "South Sudan" },
  { code: "ESP", name: "Spain" },
  { code: "LKA", name: "Sri Lanka" },
  { code: "SDN", name: "Sudan" },
  { code: "SUR", name: "Suriname" },
  { code: "SWE", name: "Sweden" },
  { code: "CHE", name: "Switzerland" },
  { code: "SYR", name: "Syria" },
  { code: "TWN", name: "Taiwan" },
  { code: "TJK", name: "Tajikistan" },
  { code: "TZA", name: "Tanzania" },
  { code: "THA", name: "Thailand" },
  { code: "TLS", name: "Timor-Leste" },
  { code: "TGO", name: "Togo" },
  { code: "TON", name: "Tonga" },
  { code: "TTO", name: "Trinidad and Tobago" },
  { code: "TUN", name: "Tunisia" },
  { code: "TUR", name: "Turkey" },
  { code: "TKM", name: "Turkmenistan" },
  { code: "TUV", name: "Tuvalu" },
  { code: "UGA", name: "Uganda" },
  { code: "UKR", name: "Ukraine" },
  { code: "ARE", name: "United Arab Emirates" },
  { code: "GBR", name: "United Kingdom" },
  { code: "USA", name: "United States of America" },
  { code: "URY", name: "Uruguay" },
  { code: "UZB", name: "Uzbekistan" },
  { code: "VUT", name: "Vanuatu" },
  { code: "VEN", name: "Venezuela" },
  { code: "VNM", name: "Vietnam" },
  { code: "YEM", name: "Yemen" },
  { code: "ZMB", name: "Zambia" },
  { code: "ZWE", name: "Zimbabwe" },
];

const months = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

const Form = () => {
  return (
    <div className="form-container">
      <form>
        <p>
          Name<small className="required-text">(required)</small>
        </p>
        <div className="form-row">
          <div className="form-group half-width">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group half-width">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group half-width">
            <label htmlFor="email">
              Email <small className="required-text">(required)</small>
            </label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group half-width">
            <label htmlFor="telephone">
              Telephone <small className="required-text">(required)</small>
            </label>
            <input type="tel" id="telephone" name="telephone" required />
          </div>
        </div>
        <p>Property Address</p>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select id="country" name="country" required>
            <option value="">United Kingdom</option>
            {countries.map((country, index) => (
              <option key={index} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
          <label>
            {" "}
            Address Line 1<small className="required-text">(required)</small>
          </label>
          <input
            type="text"
            id="addressLine1"
            name="addressLine1"
            required
            placeholder="Address Line 1"
          />
          <label>Address Line 2</label>
          <input
            type="text"
            id="addressLine2"
            name="addressLine2"
            placeholder="Address Line 2"
          />
          <div className="form-row">
            <div className="form-group half-width">
              <label>
                {" "}
                Postal Code<small className="required-text">(required)</small>
              </label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                required
                placeholder="Postcode"
              />
            </div>
            <div className="form-group half-width">
              <label>
                {" "}
                City<small className="required-text">(required)</small>
              </label>
              <input
                type="text"
                id="cityTown"
                name="cityTown"
                required
                placeholder="City / Town"
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group half-width">
            <label htmlFor="idealStartDate">Ideal Start Month </label>
            <select id="idealStartDate" name="idealStartDate" required>
              <option value="">Select an option</option>
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group half-width">
            <label htmlFor="idealEndDate">Ideal End Month </label>
            <select id="idealEndDate" name="idealEndDate" required>
              <option value="">Select an option</option>
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="projectDetails">
            Please tell us more about your project{" "}
            <p className="required-text">(required)</p>
          </label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            rows="5"
            required
          ></textarea>
        </div>

        <div className="service">
          <label>
            Which service(s) do you feel you require?
            <br />
            <small className="required-text">
              Please note this isn't fixed and we will advise you on which
              service we feel best suits your individual project requirements.
            </small>
          </label>
          <div className="checkbox-group">
            <div className="check-service">
              <input
                type="checkbox"
                id="fullService"
                name="serviceType"
                value="Full Interior Design Service"
              />
              <label htmlFor="fullService" className="chk-label">
                Full Interior Design Service
              </label>
            </div>
            <div className="check-service">
              <input
                type="checkbox"
                id="virtualService"
                name="serviceType"
                value="Virtual Interior Design Service"
              />
              <label htmlFor="virtualService" className="chk-label">
                Virtual Interior Design Service
              </label>
            </div>
            <div className="check-service">
              <input
                type="checkbox"
                id="conciergeService"
                name="serviceType"
                value="Design Concierge"
              />
              <label htmlFor="conciergeService" className="chk-label">
                Design Concierge
              </label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
