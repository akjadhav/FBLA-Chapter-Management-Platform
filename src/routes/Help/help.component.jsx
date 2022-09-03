import { Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../../utils/firebase/firebase.utils";

import LandingHeader from '../../components/LandingHeader/landing-header.component';
import Header from '../../components/Header/header.component';
import SocialIconsGroup from '../../components/SocialIconsGroup/social-icons-group.component';

import APPLICATION_VARIABLES from '../../settings';

const Help = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div >
            {!user && (<LandingHeader />)}
            {user && (<Header />)}

            <div className='help-card'>
                <Card className="mx-auto m-5" style={{ maxWidth: '35rem', backgroundColor: APPLICATION_VARIABLES.CARD_BACKGROUND_COLOR}}>
                    <Card.Header style={{ backgroundColor: APPLICATION_VARIABLES.CARD_HEADER_COLOR, color: APPLICATION_VARIABLES.CARD_HEADER_TEXT_COLOR }}>Help?</Card.Header>
                    <Card.Body>
                        <Card.Title className="mb-4">For general support, please contact:</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><strong>Email:</strong> <a href={`mailto:${APPLICATION_VARIABLES.GENERAL_EMAIL}?subject=${APPLICATION_VARIABLES.GENERAL_EMAIL_SUBJECT}`}>{APPLICATION_VARIABLES.GENERAL_EMAIL}</a></Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">or</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{APPLICATION_VARIABLES.APP_NAME} Advisers and/or Officers</Card.Subtitle>
                        <hr/>
                        <Card.Title className="mb-4">For technical support, please contact:</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><strong>Email:</strong> <a href={`mailto:${APPLICATION_VARIABLES.SUPPORT_EMAIL}?subject=${APPLICATION_VARIABLES.SUPPORT_EMAIL_SUBJECT}`}>{APPLICATION_VARIABLES.SUPPORT_EMAIL}</a></Card.Subtitle>
                        <hr/>
                        <Card.Subtitle className="mb-2 mt-2 text-muted"><i>A product by <a href="https://www.linkedin.com/company/ameya-labs" target="_blank">Ameya Labs&#8482;</a></i></Card.Subtitle>
                        <br />
                        <Card.Subtitle className="mb-2 text-muted"><strong>Version:</strong> {APPLICATION_VARIABLES.VERSION}</Card.Subtitle>
                    </Card.Body>
                </Card>

                <SocialIconsGroup />
            </div>
        </div>
    );
};

export default Help;