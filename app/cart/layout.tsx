export default function CartLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            {children}
            <div>
                <p>현대카드 무이자 이벤트 중</p>
            </div>
        </div>
    );
}