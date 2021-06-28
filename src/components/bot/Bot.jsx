import React from 'react';
import './BotStyle.css';

export default class Bot extends React.Component {

    componentDidMount() {
        window.botpressWebChat.init(
            {
                host: 'http://localhost:3002',
                botId: 'sample-bot',
                showConversationsButton: false,
                botName: 'Sample Bot',
                className: 'chat2',
                enableReset: true,
                disableAnimations: true,
                containerWidth: 350,
                layoutWidth: 350,
                hideWidget: false,
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