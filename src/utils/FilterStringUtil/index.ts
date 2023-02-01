export default function FilterString(p: string, s: string): number {
    if (p.length === 0) {
        return 1;
    }
    if (s.length === 0 || p.length === 0 || s.length < s.length) {
        return -1;
    }
    const n = s.length,
        m = p.length;
    for (let i = 0; i < n; i++) {
        // 遍历对比子串与模式串
        for (let j = 0; j < m; j++) {
            if (s[i + j] !== p[j]) break;
            // 如果遍历到了最后一位，并且相等，说明匹配成功
            if (j === p.length - 1) {
                // 返回已匹配子串的首字母位置
                return i;
            }
        }
    }

    return -1;
}
