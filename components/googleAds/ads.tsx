import { useEffect } from 'react';

const AdBanner = (props: any) => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <ins
            className="adsbygoogle adbanner-customize"
            style={{
                display: 'block',
                overflow: 'hidden',
            }}
            data-ad-client={'ca-pub-3470415777558514'}
            {...props}
        />
    );
};
export default AdBanner;