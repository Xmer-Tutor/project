import React from 'react';
import CompanyLogo from './CompanyLogo';
import CompanyName from './CompanyName';

const CompanyInformation = () => {
    return (
            <div className="company-info">
                <CompanyLogo />
                <CompanyName />                    
            </div>
           );
};
export default CompanyInformation;