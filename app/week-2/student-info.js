
import Link from 'next/link';

    export default function StudentInfo () {
        return (
            <main> 
                <div className="text-lg">
                    <ul className="text-2xl font-normal mb-5"> Khushbu Shah
                        <li className="hover:text-green-400 hover:underline">
                            <Link href="https://github.com/khushbu-s-shah/cprg306-assignments.git">My Github Repository</Link>
                        </li>
                    </ul>
                </div>
            </main>
            
        );

    }