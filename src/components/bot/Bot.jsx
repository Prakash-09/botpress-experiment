import React from 'react';
import './BotStyle.css';

export default class Bot extends React.Component {

    componentDidMount() {
        window.botpressWebChat.init(
            {
                host: 'http://localhost:3002',
                botId: 'dd-bot',
                showConversationsButton: false,
                botName: 'DD Bot',
                className: 'chat2',
                enableReset: true,
                disableAnimations: true,
                containerWidth: 350,
                showPoweredBy: false,
                layoutWidth: 350,
                hideWidget: false,
                showUserAvatar: true,
                extraStylesheet: '/assets/modules/channel-web/BotStyle.css',
            }
        );
    }

    render() {
        return (
            <div className="app-heading">
                {/* <h2>Helloo bot app</h2> */}
            </div>
        )
    }
}