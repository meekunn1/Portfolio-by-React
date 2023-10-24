import React, { useEffect } from "react";

const styles = {
  marginAll: {
    margin: "10px",
    padding: "10px",
  },
};

const badgeWidth = "350";
const badgeLength = "270";

export default function Badges() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className='container mb-4 mt-4'>
      <h1>Badges</h1>
      <div className='card' style={styles.marginAll}>
        <p>The following are the Badges I have received on Credly.</p>
        <div className=' d-flex flex-row flex-wrap align-self-stretch justify-content-center align-content-center'>
          <div
          id="HTML&CSS"
            class='x-2'
            data-iframe-width={badgeWidth}
            data-iframe-height={badgeLength}
            data-share-badge-id='1dd35a27-0109-4e0a-acd4-4fce63e6041a'
            data-share-badge-host='https://www.credly.com'
          ></div>
          <div
            id='SQL&NoSQL'
            class='x-2'
            data-iframe-width={badgeWidth}
            data-iframe-height={badgeLength}
            data-share-badge-id='95ff92a7-4aaf-464b-ab1e-d8988c048eda'
            data-share-badge-host='https://www.credly.com'
          ></div>

          <div
            id='Node&Express'
            class='x-2'
            data-iframe-width={badgeWidth}
            data-iframe-height={badgeLength}
            data-share-badge-id='b62e6f7f-f9b0-4bc6-bee3-3d9b688a4b1e'
            data-share-badge-host='https://www.credly.com'
          ></div>
          <div
            id='JS&Jquery'
            class='x-2'
            data-iframe-width={badgeWidth}
            data-iframe-height={badgeLength}
            data-share-badge-id='0629c411-e069-4c0a-89c9-199b66af2b32'
            data-share-badge-host='https://www.credly.com'
          ></div>
          <div
            id='React'
            class='x-2'
            data-iframe-width={badgeWidth}
            data-iframe-height={badgeLength}
            data-share-badge-id='8bbaf684-b09d-48d6-89e6-d5b75e71c01a'
            data-share-badge-host='https://www.credly.com'
          ></div>
        </div>
      </div>
    </div>
  );
}
