/**
 * Contains build time stamp
 */
export default function DateModified(props) {
  return (
    <div property="dateModified">
      Date modified: {process.env.NEXT_PUBLIC_BUILD_DATE}
    </div>
  );
}