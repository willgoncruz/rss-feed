import { Feed } from "../../types/feed";

type Props = {
    feed: Feed | null;
}

const ActiveFeed = ({ feed }: Props) => {
    return (
        <div>
            <span>SELECT FEED BELOW</span>
            <div>
                { !feed && ' No Feed selected ;-;' }
                { feed && feed.url }
            </div>
        </div>
    );
};

export default ActiveFeed;
