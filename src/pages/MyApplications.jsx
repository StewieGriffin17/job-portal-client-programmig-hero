import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';

const MyApplications = () => {
    return (
        <div>
            <ApplicationStat></ApplicationStat>
            <Suspense fallback={"Loading Application List"}>
                <ApplicationList></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;