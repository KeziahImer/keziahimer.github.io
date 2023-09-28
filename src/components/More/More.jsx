import './More.css';

const More = () => {
    const [inAnimation, setInAnimation] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setInAnimation(true);
        }, 500)
    }, [])
    return (
        <div style={{ display: flex, flexDirection: 'row' }}>
            <div class="more-left">

            </div>
            <div class="more-right">

            </div>
        </div>
        
    );
};

export default More;
